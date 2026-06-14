const fs = require('fs');
const path = require('path');

// Faqat shu 2 ta faylni xavfsiz o'zgartiramiz, qolganlariga tegmaymiz!
const filesToEdit = [
    'index.html',
    '_next/static/chunks/0~jf1lpal1d2k.js'
];

const replacements = {
    'Javlon': 'Lazizbek',
    'Nargiza': 'Mahbubaxon',
    '06.06.2026': '28.06.2026',
    '13.06.2026': '01.07.2026',
    'date:"06.06"': 'date:"28.06"',
    'date:"13.06"': 'date:"01.07"',
    '20260606': '20260628',
    '20260613': '20260701',
    'Buxoro viloyati, Romitan tumani': 'Buxoro viloyati, Olot tumani',

    // Supabase yangi URL manzili
    'https://jdtegrhxucljgesbieza.supabase.co': 'https://icnscyilifmurzsqzsrs.supabase.co',
    // Supabase yangi Publishable API kaliti
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkdGVncmh4dWNsamdlc2JpZXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzNzgxNDksImV4cCI6MjA5NTk1NDE0OX0.veW38etKtI6D6oDAOkw19Hj766dq5jRo1Mt_-UiIrzE': 'sb_publishable_YKn0x1-VZ1zfswFbsCEBHA_x9wISTso'
};

filesToEdit.forEach(filePath => {
    let fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');

        for (const [search, replace] of Object.entries(replacements)) {
            const regex = new RegExp(search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
            content = content.replace(regex, replace);
        }

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`✅ O'zgartirildi: ${filePath}`);
    } else {
        console.log(`❌ Topilmadi: ${filePath}`);
    }
});
