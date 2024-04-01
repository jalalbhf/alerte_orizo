
        function showEventForm() {
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('event-form-container').style.display = 'block';
        }
    
        function checkOther() {
            var eventSelect = document.getElementById('event');
            var otherEventContainer = document.getElementById('other-event-container');
            if (eventSelect.value === 'autre') {
                otherEventContainer.style.display = 'block';
            } else {
                otherEventContainer.style.display = 'none';
            }
        }
    
        document.getElementById('event-form').addEventListener('submit', function(event) {
            event.preventDefault();
            var formData = new FormData(this);
            var eventObject = Object.fromEntries(formData);
    
            // Générer un identifiant unique pour chaque événement
            var eventId = 'event_' + new Date().getTime();
            localStorage.setItem(eventId, JSON.stringify(eventObject));
    
            alert('Événement ajouté localement');
            showEvents(); // Actualiser la liste des événements
        });
    
        // La fonction showEvents telle que vous l'avez fournie
        function showEvents() {
            var eventsList = document.getElementById('events-list');
            eventsList.innerHTML = ''; // Effacer la liste existante
    
            var table = document.createElement('table');
            var headerRow = table.insertRow();
            var headers = ["Événement", "Ligne", "Arrêt", "Signalé à", "Action"];
            headers.forEach(headerText => {
                var headerCell = document.createElement("th");
                headerCell.textContent = headerText;
                headerRow.appendChild(headerCell);
            });
    
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i);
                if (key.startsWith('event_')) {
                    var eventData = JSON.parse(localStorage.getItem(key));
                    var row = table.insertRow();
    
                    var cell = row.insertCell();
                    cell.textContent = eventData.event;
    
                    cell = row.insertCell();
                    cell.textContent = eventData['ligne-bus'];
    
                    cell = row.insertCell();
                    cell.textContent = eventData['arret-bus'];
    
                    cell = row.insertCell();
                    cell.textContent = new Date(parseInt(key.split('_')[1])).toLocaleString();
    
                    cell = row.insertCell();
                    var deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Supprimer';
                    deleteButton.onclick = function() {
                        if (confirm("Êtes-vous sûr de vouloir supprimer cet événement ?")) {
                            localStorage.removeItem(key);
                            showEvents(); // Actualiser la liste des événements après la suppression
                        }
                    };
                    cell.appendChild(deleteButton);
                }
            }
    
            eventsList.appendChild(table);
        }
    
        document.addEventListener('DOMContentLoaded', showEvents);
