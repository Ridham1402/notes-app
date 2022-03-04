const yargs = require('yargs')
const { listNotes } = require('./notes.js')
const notes = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'Adding note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,        //mandatory title
            type: 'string'             //mandatory string arg
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'Removing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'reading note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()