{% if domain %}
var APP_URL = '{{ domain }}';
var API_URL = '{{ domain }}';
{% else %}
var APP_URL = '{{ protocol }}://{{ path }}.{{ host }}';
var API_URL = '{{ protocol }}://api.{{ host }}';
{% endif %}

// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

APP_URL = query.appUrl || APP_URL;
API_URL = query.apiUrl || API_URL;

angular.module('formioSalesQuoteApp').constant('AppConfig', {
  appUrl: APP_URL,
  apiUrl: API_URL,
  company: 'Acme Inc.',
  forms: {
    contractForm: APP_URL + '/contract',
    customerForm: APP_URL + '/customer',
    opportunityForm: APP_URL + '/opportunity',
    agentForm: APP_URL + '/agent',
    quoteForm: APP_URL + '/quote',
    userLoginForm: APP_URL + '/user/login'
  }
});
