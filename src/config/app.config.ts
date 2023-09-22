interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Visitor'],
  tenantName: 'Business',
  applicationName: 'MyBlog',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read business information'],
  ownerAbilities: ['Manage user information', 'Manage business information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/6c98b3de-026e-4121-945e-a7ca0871b7b6',
};
