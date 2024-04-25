import courses from './courses.json' assert { type: 'json' }
import { db } from '../firebase/config.js'
import { addDoc, setDoc, collection } from 'firebase/firestore'

const data = courses.map((item) => {
    return item
})

const cursosRef = collection(db, "cursos");

data.forEach((item) => {
    addDoc(cursosRef, item)
})