<?php
// WordPressテーマのfunctions.phpに追加

// ランディングページコンポーネントをショートコードとして使用
function exthera_landing_shortcode($atts) {
    $atts = shortcode_atts(array(
        'section' => 'full', // full, hero, benefits, pricing, faq
    ), $atts);
    
    // CSS/JSを動的に読み込み
    wp_enqueue_style('exthera-landing-css', get_template_directory_uri() . '/landing/assets/index-CvjQrg2t.css');
    wp_enqueue_script('exthera-landing-js', get_template_directory_uri() . '/landing/assets/index-Bec5LVlZ.js', array(), '1.0.0', true);
    
    ob_start();
    
    switch ($atts['section']) {
        case 'hero':
            echo '<div id="hero-section"></div>';
            break;
        case 'benefits':
            echo '<div id="benefits-section"></div>';
            break;
        case 'pricing':
            echo '<div id="pricing-section"></div>';
            break;
        case 'faq':
            echo '<div id="faq-section"></div>';
            break;
        default:
            echo '<div id="root"></div>';
    }
    
    return ob_get_clean();
}
add_shortcode('exthera_landing', 'exthera_landing_shortcode');

// 使用例:
// [exthera_landing] - 完全なランディングページ
// [exthera_landing section="hero"] - ヒーローセクションのみ
// [exthera_landing section="pricing"] - 料金表のみ
?>