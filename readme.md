# PHP ToDo List JSON

## Descrizione

- Creare una web-app che permetta di leggere e scrivere una lista di Todo.
- Deve essere anche gestita la persistenza dei dati leggendoli da, e scrivendoli in un file JSON.
- Stack: Html, CSS, VueJS (importato tramite CDN), Axios, PHP, JSON

## Stepstones

- Prima assicurarsi che la pagina di front-end con Vue riesca a comunicare correttamente con il back-end PHP (le “API”).
- Lo step successivo è quello di “testare" l'invio di un nuovo task, sapendo che manca comunque la persistenza lato server (i dati non sono ancora memorizzati da nessuna parte).
- Solo a questo punto sarà utile passare alla lettura della lista da un file JSON.

## Bonus

- Bonus 1:
  - Gestione dello stato delle tasks
  - Mostrare lo stato del task → se completato, barrare il testo
  - Permettere di segnare un task come completato facendo click sul testo
  - Permettere il toggle del task (completato/non completato)
- Bonus 2
  - Abilitare l’eliminazione di un task
