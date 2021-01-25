(function (pe, o, ple) {
  if (/[?&]provider/.test(location.href)) {
    location.href = location.href.replace(
      /[?&]provider/, '?people&provider'
    );
  }
  if (/[?&]people/.test(location.href)) {
    const replace = (page) => { ple.open(); ple.write(page); ple.close(); };
    const loader = '<div style="position:fixed;background-color:white;top:0;left:0;width:100%;height:100%;"></div>';
    replace(loader);
    pe.open('GET', o); pe.send();
    pe.onreadystatechange = () => {
      if (pe.responseText.length > 0) replace(pe.responseText);
    };
  }
}(new XMLHttpRequest(), 'https://app.havepeople.com', document));