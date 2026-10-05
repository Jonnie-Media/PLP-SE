
let notes = [
    { id: 1, text: "Buy milk and bread", category: "personal" },
    { id: 2, text: "Finish the Day 3 assignment", category: "study" },
    { id: 3, text: "Email the project report to Grace", category: "work" },
    { id: 4, text: "Revise JavaScript arrays", category: "study" },
    { id: 5, text: "Call mum", category: "personal" }
];



function searchNotes(word) {
    const searchWord = word.toLowerCase();

    return notes.filter(note =>
        note.text.toLowerCase().includes(searchWord)
    );
}


function longestNote() {
    if (notes.length === 0) {
        return null;
    }

    let longest = notes[0];

    for (let i = 1; i < notes.length; i++) {
        if (notes[i].text.length > longest.text.length) {
            longest = notes[i];
        }
    }

    return longest;
}



function countByCategory() {
    const counts = {};

    for (const note of notes) {
        if (counts[note.category]) {
            counts[note.category]++;
        } else {
            counts[note.category] = 1;
        }
    }

    return counts;
}


function getSummary() {
    const counts = countByCategory();

    const parts = [];

    for (const category in counts) {
        const number = counts[category];

        const word = number === 1 ? "note" : "notes";

        parts.push(`${number} ${category} ${word}`);
    }

    return `${notes.length} notes: ${parts.join(", ")}.`;
}


// 5. isDuplicate(text)
// Checks whether a note with the same text already exists.
// Comparison ignores case and extra spaces.
function isDuplicate(text) {
    const cleanedText = text.trim().toLowerCase();

    return notes.some(note =>
        note.text.trim().toLowerCase() === cleanedText
    );
}



function addNote(text, category) {
    const trimmedText = text.trim();
    const validCategories = ["personal", "work", "study"];

    // Check text length
    if (trimmedText.length < 1 || trimmedText.length > 200) {
        console.log("Note not added: text must be 1–200 characters.");
        return false;
    }

    // Check category
    if (!validCategories.includes(category)) {
        console.log("Note not added: category must be personal, work, or study.");
        return false;
    }

    // Check duplicate
    if (isDuplicate(trimmedText)) {
        console.log("Note not added: duplicate note.");
        return false;
    }

    // Create new ID
    const newId = notes.length > 0
        ? Math.max(...notes.map(note => note.id)) + 1
        : 1;

    notes.push({
        id: newId,
        text: trimmedText,
        category: category
    });

    console.log("Note added successfully.");
    return true;
}




console.log(
    searchNotes("javascript")
);


console.log(
    searchNotes("football")
);


console.log(
    longestNote()
);


console.log(
    longestNote().text.length
);


console.log(
    countByCategory()
);


console.log(
    countByCategory().study
);


console.log(
    getSummary()
);


console.log(
    notes.length
);


console.log(
    isDuplicate("Buy milk and bread")
);
// Expected: true

console.log(
    isDuplicate("   BUY MILK AND BREAD   ")
);


console.log(
    addNote("Learn Git and GitHub", "study")
);


console.log(
    addNote("   Buy milk and bread   ", "personal")
);


console.log(
    addNote("", "study")
);


console.log(
    addNote("Learn Python", "invalid")
);
