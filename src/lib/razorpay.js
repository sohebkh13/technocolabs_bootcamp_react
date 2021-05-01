const loadPaymentLib = (callback) => {
    const script = document.createElement('script');
    script.id = 'googleMaps';
    document.body.appendChild(script);
    // script.onload = () => { 
    //     if (callback) callback();
    // };
        if (callback) callback();
}

export default loadPaymentLib;