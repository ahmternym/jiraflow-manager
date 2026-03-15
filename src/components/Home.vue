<template>
    <div class="container">
        
        <div class="header-actions">
            <h2 class="page-title">My Tasks</h2>
            <router-link to="/add" class="add-task-btn">
                <span class="material-symbols-outlined">add</span>
                Add New Task
            </router-link>
        </div>

        <div class="task" v-for="doc in documents" :key="doc.id" :class="{ complete: doc.done }">
            
            <div class="text-content">
                <h4 @click="toggleDescription(doc.id)">{{ doc.title }}</h4>
                <p v-if="expandedIds.includes(doc.id)">{{ doc.description }}</p>
            </div>
            
            <div class="materials">
                <span @click="doneTask(doc.id)" class="material-symbols-outlined tick">done_outline</span>
                
                <span class="material-symbols-outlined" @click="deleteTask(doc.id)">delete</span>
                
                <router-link :to="{ name: 'edit', params: { id: doc.id } }">
                    <span class="material-symbols-outlined">edit</span>
                </router-link>
            </div>

        </div>

    </div>
</template>

<script>
import { DB } from '@/firebase/configs.js'
import { collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export default {
    data() {
        return {
            documents: [],
            expandedIds: [] 
        }
    },
   
    mounted() {
        const jiraCollection = collection(DB, "jira");
        
        getDocs(jiraCollection).then(snapShot => {
            let tempArray = []; 
            
            snapShot.docs.forEach(doc => {
                tempArray.push({ ...doc.data(), id: doc.id });
            });
            
            this.documents = tempArray; 
        });
    },
    methods: {
        toggleDescription(id) {
            if (this.expandedIds.includes(id)) {
                this.expandedIds = this.expandedIds.filter(itemId => itemId !== id);
            } 
            else {
                this.expandedIds.push(id);
            }
        },

        async deleteTask(id) {
            if(confirm("Are you sure you want to delete this task?")) {
                const docRef = doc(DB, "jira", id);
                await deleteDoc(docRef);
                
              
                this.documents = this.documents.filter(doc => doc.id !== id);
            }
        },

        async doneTask(id) {
            
            const task = this.documents.find(a => a.id === id);
            if (!task) return;

            
            const newDoneState = !task.done;

            
            const docRef = doc(DB, "jira", id);
            try {
                await updateDoc(docRef, {
                    done: newDoneState
                });
                
                task.done = newDoneState;
            } catch (error) {
                console.error("Error updating status: ", error);
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.container {
    width: 600px;
    margin: 40px auto; 
    font-family: 'Poppins', sans-serif; 
}

.header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e2e8f0;
}

.page-title {
    margin: 0;
    color: #1e293b;
    font-size: 1.5rem;
    font-weight: 600;
}

.add-task-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #10b981; 
    color: white;
    padding: 10px 18px;
    border-radius: 8px;
    text-decoration: none; 
    font-weight: 500;
    font-size: 0.95rem;
    transition: background 0.3s ease, transform 0.2s ease;
}

.add-task-btn:hover {
    background: #059669; 
    transform: translateY(-2px);
}

.task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: whitesmoke;    
    margin-bottom: 15px;
    padding: 16px 20px;
    border-radius: 12px;        
    border: 1px solid #e2e8f0;  
    transition: all 0.3s ease; 
}

.task:hover {
    transform: translateY(-2px); 
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 20px; 
}

.text-content {
    display: flex;
    flex-direction: column;
    gap: 4px; 
    text-align: left;
}

.text-content h4 {
    margin: 0; 
    color: #1e293b; 
    font-size: 1.1rem;
    font-weight: 600; 
    cursor: pointer;
    transition: color 0.3s ease;
}

.text-content p {
    margin: 0;
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.4; 
}

.materials {
    display: flex;
    align-items: center; 
    gap: 15px; 
}

.materials span {
    color: #94a3b8; 
    cursor: pointer; 
    transition: all 0.2s ease; 
    font-size: 24px;
    display: flex; 
}


.materials span.tick:hover {
    color: #10b981; 
}


.materials span:nth-child(2):hover {
    color: #ef4444; 
}


.materials a {
    text-decoration: none;
    display: flex;
}

.materials a:hover span {
    color: #3b82f6; 
}


.task.complete {
    background: #f8fafc; 
    border-left: 6px solid #10b981; 
    opacity: 0.8; 
}

.task.complete .text-content h4 {
    text-decoration: line-through;
    color: #94a3b8; 
}


.task.complete .materials span.tick {
    color: #10b981 !important;
}
</style>