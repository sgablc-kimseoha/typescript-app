export enum UserType {
  ISSUER = 'ISSUER',
  INVESTOR = 'INVESTOR',
  VEHICLE = 'VEHICLE',
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  VERIFIER = 'VERIFIER',
  UNDERWRITER = 'UNDERWRITER',
  NAV_MANAGER = 'NAV_MANAGER',
}

export enum Permissions {
  ASSETS_LIST = 'assets:list',
  ASSETS_MANAGE = 'assets:manage',
  USERS_MANAGE = 'users:manage',
  ORDERS_MANAGE = 'orders:manage',
  ORDER_CREATE = 'order:create',
  USER_PORTFOLIO = 'user-portfolio:visit',
  ASSETS_INVEST = 'assets:invest',
  KYC_INVITE = 'kyc:invite',
  TENANTS_MANAGE = 'tenants:manage',
  SETTINGS_MANAGE = 'settings:manage',
}

const rules: {
  [key: string]: Array<string>;
} = {
  [UserType.ISSUER]: [
    Permissions.ASSETS_LIST,
    Permissions.KYC_INVITE,
    Permissions.ASSETS_MANAGE,
    Permissions.USERS_MANAGE,
    Permissions.ORDERS_MANAGE,
  ],
  [UserType.INVESTOR]: [
    Permissions.ORDERS_MANAGE,
    Permissions.USER_PORTFOLIO,
    Permissions.ASSETS_INVEST,
    Permissions.ORDER_CREATE,
  ],
  [UserType.ADMIN]: [
    Permissions.KYC_INVITE,
    Permissions.USERS_MANAGE,
    Permissions.ORDERS_MANAGE,
    Permissions.SETTINGS_MANAGE,
  ],
};

export default rules;
