// src/main.ts
import { ComicData, ComicIdResponse } from './styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

async function main() {
    const email = 's.lutfullin@innopolis.university';
    const comicId = await getComicId(email);

    if (comicId) {
        const comicData = await getComicData(comicId);
        if (comicData) {
            displayComic(comicData);
        }
    }
}

async function getComicId(email: string): Promise<ComicIdResponse | null> {
    try {
        const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
        const data: ComicIdResponse = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching comic ID:', error);
        return null;
    }
}

async function getComicData(id: ComicIdResponse): Promise<ComicData | null> {
    try {
        const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
        const data: ComicData = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching comic data:', error);
        return null;
    }
}

function cleanTranscript(text: string): string {
    let cleanedText = text.replace(/[\[\]\{\}]/g, '');
    cleanedText = cleanedText.replace(/\.\)\)\s?\(\([^)]+\.\)\)/g, '');
    cleanedText = cleanedText.replace(/\(\([^)]+\)\)/g, '');
    return cleanedText;
}

function displayComic(comic: ComicData): void {
    const comicContainer = document.getElementById('comic-container');

    if (comicContainer) {
        const img = document.createElement('img');
        img.src = comic.img;
        img.alt = comic.alt;
        img.title = comic.title;

        const titleElement = document.createElement('h2');
        titleElement.textContent = comic.safe_title;

        const dateElement = document.createElement('p');
        const date = new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day));
        
        dateElement.textContent = `Published: ${date.toLocaleDateString()}, ${dayjs(date).fromNow()}`;


        const transcriptElement = document.createElement('p');
        if (comic.transcript) {
            const cleanedTranscript = cleanTranscript(comic.transcript);
            transcriptElement.textContent = cleanedTranscript;
        } else {
            transcriptElement.textContent = 'No transcript available.';
        }

        comicContainer.appendChild(img);
        comicContainer.appendChild(titleElement);
        comicContainer.appendChild(dateElement);
        // comicContainer.appendChild(transcriptElement);
    }
}

main();

