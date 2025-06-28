<?php
// functions.php に追加するコード

// ランディングページ用のスタイルとスクリプトを登録
function exthera_landing_enqueue_scripts() {
    if (is_page('landing') || is_page_template('page-landing.php')) {
        // CSS読み込み
        wp_enqueue_style(
            'exthera-landing-css',
            get_template_directory_uri() . '/landing/assets/index-CvjQrg2t.css',
            array(),
            '1.0.0'
        );
        
        // JavaScript読み込み
        wp_enqueue_script(
            'exthera-landing-js',
            get_template_directory_uri() . '/landing/assets/index-Bec5LVlZ.js',
            array(),
            '1.0.0',
            true
        );
        
        // WordPress標準のスタイルを無効化（クリーンなデザインのため）
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('global-styles');
    }
}
add_action('wp_enqueue_scripts', 'exthera_landing_enqueue_scripts');

// カスタムページテンプレートを登録
function exthera_add_page_template($templates) {
    $templates['page-landing.php'] = 'Exthera School Landing Page';
    return $templates;
}
add_filter('theme_page_templates', 'exthera_add_page_template');

// Zapierフォーム送信用のAJAXハンドラー
function handle_landing_form_submission() {
    // セキュリティチェック
    if (!wp_verify_nonce($_POST['nonce'], 'landing_form_nonce')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    
    // Zapier webhookに送信
    $webhook_url = 'https://hooks.zapier.com/hooks/catch/YOUR-WEBHOOK-ID/';
    
    $response = wp_remote_post($webhook_url, array(
        'body' => json_encode(array(
            'name' => $name,
            'email' => $email,
            'timestamp' => current_time('mysql'),
            'source' => 'WordPress Landing Page'
        )),
        'headers' => array(
            'Content-Type' => 'application/json'
        )
    ));
    
    if (is_wp_error($response)) {
        wp_send_json_error('送信に失敗しました');
    } else {
        wp_send_json_success('登録が完了しました');
    }
}
add_action('wp_ajax_landing_form_submit', 'handle_landing_form_submission');
add_action('wp_ajax_nopriv_landing_form_submit', 'handle_landing_form_submission');
?>