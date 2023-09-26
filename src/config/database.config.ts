import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

export const getDatabaseConfig = async (
  ConfigService: ConfigService,
): Promise<MongooseModuleOptions> => ({
  uri: ConfigService.get('mongoUrl'),
});
