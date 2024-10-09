import { ChannelTypeEnum, ICredentials, SmsProviderIdEnum } from '@novu/shared';
import { GupshupSmsSmsProvider } from '@novu/providers';
import { BaseSmsHandler } from './base.handler';

export class GupshupSmsSmsHandler extends BaseSmsHandler {
  constructor() {
    super(SmsProviderIdEnum.GupshupSms, ChannelTypeEnum.SMS);
  }

  buildProvider(credentials: ICredentials) {
    this.provider = new GupshupSmsSmsProvider({
      userId: credentials.user,
      password: credentials.password,
    });
  }
}
