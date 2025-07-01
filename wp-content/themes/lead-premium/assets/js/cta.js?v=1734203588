function setupContactTracking(selector, eventCategory, eventName, action) {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    elements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof gtag === 'function') {
                gtag('event', eventName, {
                    'event_category': eventCategory,
                    'event_label': eventName,
                    'value': 1
                });
            }
            setTimeout(() => {
                action(element);
            }, 200);
        });
    });
}

setupContactTracking('.contactphone', 'contactphone', 'Contato Telefone', (el) => {
    window.location.href = "tel:" + CONTACTPHONE;
});
setupContactTracking('.contactwhatsapp', 'contactwhatsapp', 'Contato WhatsApp', () => {
    window.open(CONTACTWHATSAPP, '_blank');
});
setupContactTracking('.contactemail', 'contactemail', 'Contato Email', () => {
    window.location.href = CONTACTEMAIL;
});
