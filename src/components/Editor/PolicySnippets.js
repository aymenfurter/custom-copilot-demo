// ./src/components/Editor/PolicySnippets.js

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
    attributes: ['tenant-id', 'header-name', 'failed-validation-httpcode', 'failed-validation-error-message', 'output-token-variable-name'],
  },
  {
    label: 'set-header',
    documentation: 'Sets a response header.',
    insertText: [
      '<set-header name="${1:header name}" exists-action="override">',
      '    <value>@(${2:expression to evaluate})</value>',
      '</set-header>'
    ].join('\n'),
    attributes: ['name', 'exists-action'],
  },
  {
    label: 'set-query-parameter',
    documentation: 'Sets a query parameter to the specified value.',
    insertText: [
      '<set-query-parameter name="${1:query parameter name}" exists-action="override">',
      '    <value>@(${2:expression to evaluate})</value>',
      '</set-query-parameter>'
    ].join('\n'),
    attributes: ['name', 'exists-action'],
  },
  {
    label: 'rewrite-uri',
    documentation: 'Converts an incoming request URL from its public format to the format expected by the web service.',
    insertText: [
      '<rewrite-uri template="${1:URI template}" />'
    ].join('\n'),
    attributes: ['template'],
  },
  {
    label: 'cors',
    documentation: 'Adds cross-origin resource sharing (CORS) support to an operation or an API to allow cross-domain calls from browser-based clients.',
    insertText: [
      '<cors>',
      '    <allowed-origins>',
      '        <origin>${1:origin URL}</origin>',
      '    </allowed-origins>',
      '    <allowed-methods preflight-result-max-age="${2:max age in seconds}">${3:comma-separated list of HTTP methods}</allowed-methods>',
      '    <allowed-headers>${4:comma-separated list of headers}</allowed-headers>',
      '    <expose-headers>${5:comma-separated list of headers}</expose-headers>',
      '</cors>'
    ].join('\n'),
    attributes: ['preflight-result-max-age'],
  },
  {
    label: 'xml-to-json',
    documentation: 'Converts request or response body from XML to JSON.',
    insertText: [
      '<xml-to-json kind="javascript-object">',
      '    <output-variable name="${1:variable name}" />',
      '</xml-to-json>'
    ].join('\n'),
    attributes: ['kind'],
  },
  {
    label: 'json-to-xml',
    documentation: 'Converts request or response body from JSON to XML.',
    insertText: [
      '<json-to-xml>',
      '    <output-variable name="${1:variable name}" />',
      '</json-to-xml>'
    ].join('\n'),
    attributes: [],
  },
  {
    label: 'base64-encode',
    documentation: 'Encodes the content of the specified variable or the current message body as a base64 string.',
    insertText: [
      '<base64-encode>',
      '    <value>${1:expression to encode}</value>',
      '    <output-variable name="${2:variable name}" />',
      '</base64-encode>'
    ].join('\n'),
    attributes: [],
  },
  {
    label: 'base64-decode',
    documentation: 'Decodes the content of the specified variable or the current message body that is base64 encoded.',
    insertText: [
      '<base64-decode>',
      '    <value>${1:expression to decode}</value>',
      '    <output-variable name="${2:variable name}" />',
      '</base64-decode>'
    ].join('\n'),
    attributes: [],
  },
];

export default policySnippets;