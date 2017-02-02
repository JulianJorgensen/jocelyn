var isBlog;

if ((process.env['prod_url'] == 'http://www.joyfullee.com') || (process.env['prod_url'] == 'http://www.koichihealing.com')){
  isBlog = true;
}else{
  isBlog = false;
}

module.exports = isBlog;
