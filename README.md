# Benvenuto/a in questo template

## A cosa serve?
Questo template verrà utilizzato per la creazione delle card per il pannello admin, esso mette a disposizione sia una parte grafica sia un insieme di funzionalità standard da usare per gestire le interazioni tra l'utente e la componente

## Cosa devo modificare?
Nel seguente template bisogna modificare esclusivamente il file "Card.js", esso è predisposto con delle funzionalità che faciliteranno il cambiamento di stato della componente. Nella parte superiore del file sono presenti dei commenti che vanno compilati con le proprie informazioni

### setStatus(type, description, progress)
Il **type** definisce il nuovo stato della card, essi possono essere:
* "ready": quando il contenuto della card è pronto per essere visualizzato
* "done": quando l'elaborazione richiesta è stata completata
* "error": quando si verifica un errore nella card
* "loading": quando si vuole definire un caricamente di durata indefinita
* "progress": quando si vuole usare una barra di caricamento per indicare il progresso dell'operazione che sta compiendo

Quando lo status della card è "done" o "error" è possibile specificare una funzione nelle props della componente in modo tale da permettere all'utente di ricaricare la scheda

In tutti i casi, tranne quando lo status della card è "ready", è possibile specificare una descrizione (tramite il campo description altrimenti vi sono quelle di default) per far capire all'utente cosa sta succedendo


### updateProgress(progress)
Nel caso in cui lo status della card è "progress", è possibile aggiornare la barra di caricamento in base al progresso dell'elaborazion
N.B. Il valore di progress deve essere un numero compreso tra 0 e 1 Es: 0.5
