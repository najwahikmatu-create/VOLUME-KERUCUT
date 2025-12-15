const PI_KERUCUT = 3.14;
const SEPERTIGA = 1/3; 

function hitungVolumeKerucut() {
    
    const jariJariAlas = parseFloat(document.getElementById('jariJariAlas').value);
    const tinggiKerucut = parseFloat(document.getElementById('tinggiKerucut').value);

    if (isNaN(jariJariAlas) || isNaN(tinggiKerucut) || jariJariAlas <= 0 || tinggiKerucut <= 0) {
        alert("🚨 Harap masukkan nilai numerik yang valid (lebih dari 0) untuk Jari-Jari Alas dan Tinggi.");
        return;
    }

    const luasAlas = PI_KERUCUT * jariJariAlas * jariJariAlas;
    const volume = SEPERTIGA * luasAlas * tinggiKerucut;

    alert(`🎉 Hasil Perhitungan Volume Kerucut:\nJari-Jari Alas: ${jariJariAlas}\nTinggi Kerucut: ${tinggiKerucut}\nKonstanta Pi: ${PI_KERUCUT}\n-------------------------\nVolume: ${volume.toFixed(2)}`);
}