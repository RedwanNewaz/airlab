const fs = require('fs');
const bibtexParse = require('bibtex-parse-js');

// Read your .bib file
const bibData = fs.readFileSync('redwan_publications.bib', 'utf-8');

// Parse the BibTeX data
const parsedBib = bibtexParse.toJSON(bibData);



// / Generate the list
const paperList = parsedBib.map((entry, index) => {
  // Check if entry is @inproceedings and handle missing journal field
  const isInProceedings = entry.entryType === 'inproceedings';
  const journalOrBooktitle = entry.entryTags.journal || (isInProceedings ? entry.entryTags.booktitle : 'No journal or booktitle available');
  
  return {
    id: index + 1,
    title: entry.entryTags.title || 'No title available',
    year: entry.entryTags.year || 'No year available',
    link: entry.entryTags.url || 'No link available',
    authors: entry.entryTags.author
      ? entry.entryTags.author.split(' and ').map(name => name.trim())
      : ['No authors available'],
    journal: journalOrBooktitle,
    bibtex: `@${entry.entryType}{${entry.citationKey},
      title={${entry.entryTags.title}},
      author={${entry.entryTags.author}},
      ${isInProceedings ? 'booktitle' : 'journal'}={${journalOrBooktitle}},
      year={${entry.entryTags.year}},
      publisher={${entry.entryTags.publisher || 'Unknown'}}
    }`,
    abstract: entry.entryTags.abstract || 'No abstract available'
  };
});

// Extract all unique years from the paperList
const years = [...new Set(paperList.map(paper => paper.year))];

// Convert the paperList and years into a JavaScript file format
const fileContent = `export const publicationData = ${JSON.stringify(paperList, null, 2)};\n\n` +
  `export const years = ${JSON.stringify(years)};\n\n` 

// Save to publicationData.js
fs.writeFileSync('publicationData.js', fileContent, 'utf-8');

console.log('publicationData.js has been saved!');
