<template>
    <div class="header-wrapper">
        <div class="brand">
            <span class="material-symbols-outlined spark-icon">bolt</span>
            <h1>Jira<span class="gradient-text">Flow</span></h1>
        </div>
        <p class="tagline">Personal Task Management System</p>
    </div>
</template>

<script>
export default {
    name: 'JiraFlowHeader'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&display=swap');

.header-wrapper {
    text-align: center;
    margin: 40px auto 20px;
    font-family: 'Poppins', sans-serif;
}

.brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}


.spark-icon {
    font-size: 44px;
    color: #10b981;
    filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.4));
}

h1 {
    font-size: 3.2rem;
    font-weight: 800;
    color: #1e293b;
    margin: 0;
    letter-spacing: -2px;
}


.gradient-text {
    
    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-left: 5px;
}


.tagline {
    color: #64748b;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 8px;
    opacity: 0.8;
}
</style>