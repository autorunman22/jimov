<template>
<h1>
    <span class="typed-text text-5xl text-green-500 font-bold">{{ typeValue }}</span>
    <span class="blinking-cursor text-5xl text-red-500 font-bold">|</span>
</h1>
</template>

<script setup>
const typeValue = ref("")
const typeStatus = ref(false)
const displayTextArray = ref(["I'm Jim Ovejera.", "I'm a Freelancer.", "I'm a Web Developer.", "I'm an Android Developer."])
const typingSpeed = ref(100)
const erasingSpeed = ref(100)
const newTextDelay = ref(2000)
const displayTextArrayIndex = ref(0)
const charIndex = ref(0)

const typeText = () => {
    if (charIndex.value < displayTextArray.value[displayTextArrayIndex.value].length) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value += displayTextArray.value[displayTextArrayIndex.value].charAt(
            charIndex.value
        );
        charIndex.value += 1;
        setTimeout(typeText, typingSpeed.value);
    } else {
        typeStatus.value = false;
        setTimeout(eraseText, newTextDelay.value);
    }
}

const eraseText = () => {
    if (charIndex.value > 0) {
        if (!typeStatus.value) typeStatus.value = true;
        typeValue.value = displayTextArray.value[displayTextArrayIndex.value].substring(
            0,
            charIndex.value - 1
        );
        charIndex.value -= 1;
        setTimeout(eraseText, erasingSpeed.value);
    } else {
        typeStatus.value = false;
        displayTextArrayIndex.value += 1;
        if (displayTextArrayIndex.value >= displayTextArray.value.length)
            displayTextArrayIndex.value = 0;
        setTimeout(typeText, typingSpeed.value + 1000);
    }
}

onMounted(() => {
    setTimeout(typeText(), newTextDelay.value + 200);
})
</script>

<style scoped>
.blinking-cursor {
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}

@keyframes blink {
    from,
    to { color: transparent; }
    50% { color: white; }
}

@-moz-keyframes blink {
    from,
    to { color: transparent; }
    50% { color: white; }
}

@-webkit-keyframes blink {
    from,
    to { color: transparent; }
    50% { color: white; }
}

@-ms-keyframes blink {
    from,
    to { color: transparent; }
    50% { color: white; }
}

@-o-keyframes blink {
    from,
    to { color: transparent; }
    50% { color: white; }
}
</style>