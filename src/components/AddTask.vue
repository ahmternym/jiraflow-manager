<template>
    <div class="edit-container">
        <div class="edit-card">
            
            <div class="header">
                <h3>Add New Task</h3>
                <router-link to="/">
                    <span class="material-symbols-outlined close-icon">close</span>
                </router-link>
            </div>

            <form @submit.prevent="submitForm">
                
                <div class="input-group">
                    <label>Task Title</label>
                    <input v-model="title" type="text" placeholder="Enter task title..." required>
                </div>

                <div class="input-group">
                    <label>Task Description</label>
                    <textarea v-model="description" rows="5" placeholder="Enter task description..." required></textarea>
                </div>

                <div class="actions">
                    <button type="submit" class="update-btn">
                        <span class="material-symbols-outlined">add_task</span>
                        Add to List
                    </button>
                </div>

            </form>

        </div>
    </div>
</template>

<script>
import { DB } from '@/firebase/configs';
import { collection, addDoc } from 'firebase/firestore';

export default {
    data() {
        return {
            title: "",
            description: "" ,
            done:false
        }
    },
    methods: {
        async submitForm() {
            const colRef = collection(DB, "jira");
            
            await addDoc(colRef, {
                title: this.title,
                description: this.description,
                done:false
            });

            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

.edit-container {
    display: flex;
    justify-content: center;
    padding: 40px 20px;
    font-family: 'Poppins', sans-serif;
}

.edit-card {
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); 
    border: 1px solid #e2e8f0;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f8fafc; 
}

.header h3 {
    margin: 0;
    color: #1e293b;
    font-size: 1.4rem;
    font-weight: 600;
}

.close-icon {
    color: #94a3b8;
    cursor: pointer;
    font-size: 28px;
    transition: color 0.2s ease, transform 0.2s ease;
}

.close-icon:hover {
    color: #ef4444; 
    transform: rotate(90deg); 
}

.input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-align: left;
}

.input-group label {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 8px;
    font-weight: 500;
}

.input-group input,
.input-group textarea {
    padding: 12px 16px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    color: #334155;
    background: #f8fafc;
    transition: all 0.3s ease;
    resize: vertical; 
}

.input-group input:focus,
.input-group textarea:focus {
    outline: none;
    border-color: #10b981; 
    background: white;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
}

.actions {
    display: flex;
    justify-content: flex-end; 
    margin-top: 30px;
}

.update-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #10b981; 
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}

.update-btn:hover {
    background: #059669; 
    transform: translateY(-2px);
}
</style>