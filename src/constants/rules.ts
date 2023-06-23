import { UserType } from 'constants/user';
import { Permissions } from 'constants/permissions';

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
