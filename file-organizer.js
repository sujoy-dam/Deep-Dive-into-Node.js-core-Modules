const fs = require("fs");
const path = require("path");

const sourseDir = path.join(__dirname, "output", 'messy-files');
const organizeDir = path.join(__dirname, "output", 'organized');

const categories = {
    images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
    videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
    others: [],
};
const testFiles = [
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt",
    "app.py",
    "movie.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyz",
    "nodejs.zip",
];

function initialzeDirectories() {
    if (!fs.existsSync(sourseDir)) {
        fs.mkdirSync(sourseDir, { recursive: true });

        testFiles.forEach((file) => {
            fs.writeFileSync(path.join(sourseDir, file), `Content of ${file}`)
        })
    }
    console.log("Messi directorey files are created")

    if (!fs.existsSync(organizeDir)) {
        fs.mkdirSync(organizeDir, { recursive: true });

        Object.keys(categories).forEach((category) => {
            const categoryPath = path.join(organizeDir, category);
            if (!fs.existsSync(categoryPath)) {
                fs.mkdirSync(categoryPath)
            }
        })
    }

}
initialzeDirectories()

function getCategory(filename){
    const ext = path.extname(filename).toLowerCase()
}