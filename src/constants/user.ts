export enum UserType {
  ISSUER = 'ISSUER',
  INVESTOR = 'INVESTOR',
  ADMIN = 'ADMIN',
}

interface IUser {
  email: string;
  userType: UserType;
}

interface IWallet {
  address: string;
}
