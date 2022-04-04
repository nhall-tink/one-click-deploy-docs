function myFunction() {
    var baseUrl = "https://heroku.com/deploy?"
    var template = "template=https://github.com/nhall-tink/tink-link-web-example&env";
    var brand_name = '\[REACT_APP_BRAND_NAME]=' + document.getElementById('brand_name').value + '&env';
    var client_id = '\[REACT_APP_CLIENT_ID]=' + document.getElementById('client_id').value+ '&env';
    var client_secret = '\[TINK_CLIENT_SECRET]=' + document.getElementById('client_secret').value+ '&env';
    var logo_link = '\[REACT_APP_BRAND_URL]=' + document.getElementById('brand_url').value;
    var redir = baseUrl + template + client_id + client_secret + brand_name + logo_link;
    console.log(redir);
    window.location.href = redir;
}