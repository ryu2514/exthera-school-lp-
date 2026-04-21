export const campaign = {
  label: '新規募集再開',
  deadline: '2026-05-09T23:59:59+09:00',
  deadlineShort: '5/9(土)',
  deadlineLong: '2026年5月9日(土)',
  capacityTotal: 50,
  remainingCount: 44,
};

export const getDaysRemaining = () => {
  const now = new Date();
  const deadline = new Date(campaign.deadline);
  const diffMs = deadline.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
};

export const isCampaignActive = () => getDaysRemaining() > 0 && campaign.remainingCount > 0;
