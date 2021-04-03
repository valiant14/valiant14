import { RegisterUserModule } from './add-users.module';

describe('AuthSigninModule', () => {
  let registerUserModule: RegisterUserModule;

  beforeEach(() => {
    registerUserModule = new RegisterUserModule();
  });

  it('should create an instance', () => {
    expect(registerUserModule).toBeTruthy();
  });
});
