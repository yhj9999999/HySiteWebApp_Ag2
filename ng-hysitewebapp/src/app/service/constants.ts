export class Constants {
    public static appRoot = 'http://localhost:4200';
    public static apiRoot = '';
    public static idpEndPoint = 'http://localhost:5000';
    public static idpClientId = '15519B22-2DD7-4A07-A723-823E64DEFC79';
    public static idpRedirectEndPoint = `${
        Constants.appRoot
    }/assets/oidc-login-redirect.html`;
    public static idpPostLogoutEndPoint = `${
        Constants.appRoot
    }?postLogout=true`;
    public static idpSilentRenewEndPoint = `${
        Constants.appRoot
    }/assets/silent-redirect.html`;
    public static idpScopes = 'openid profile api2_scope';
    public static idpResponseType = 'id_token token';
}
