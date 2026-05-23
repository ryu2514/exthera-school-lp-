export const campaign = {
  label: '新規募集再開',
  enabled: false,
  capacityTotal: 50,
  remainingCount: 44,
};

export const isCampaignActive = () => campaign.enabled && campaign.remainingCount > 0;
