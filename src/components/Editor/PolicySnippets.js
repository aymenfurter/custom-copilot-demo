const policySnippets = [
    {
      label: 'validate-azure-ad-token',
      documentation: 'Validates Azure AD token.',
      insertText: [
        '<validate-azure-ad-token',
        '    tenant-id="${1:tenant ID or URL (e.g., contoso.onmicrosoft.com)}"',
        '    header-name="${2:name of HTTP header containing the token}"',
        '    failed-validation-httpcode="${3:HTTP status code to return on failure}"',
        '    failed-validation-error-message="${4:error message to return on failure}"',
        '    output-token-variable-name="${5:name of a variable to receive a JWT object}">',
        '    <client-application-ids>',
        '        <application-id>${6:Client application ID}</application-id>',
        '    </client-application-ids>',
        '</validate-azure-ad-token>'
      ].join('\n'),
      kind: 'Snippet',
    },
    {
      label: 'set-header',
      documentation: 'Sets a response header.',
      insertText: [
        '<set-header name="${1:header name}" exists-action="override">',
        '    <value>@(${2:expression to evaluate})</value>',
        '</set-header>'
      ].join('\n'),
      kind: 'Snippet',
    },
  ];
  
  export default policySnippets;
  