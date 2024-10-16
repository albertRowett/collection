// addRider form front-end validation
const riderForm = document.querySelector('.riderForm');
const inputs = [
    'name',
    'image',
    'team',
    'nation',
    'dob',
    'giroGc',
    'tourGc',
    'vueltaGc',
    'giroStages',
    'tourStages',
    'vueltaStages'
];

riderForm.addEventListener('submit', handleSubmit);

function handleSubmit(submit) {
    const nameInput = document.querySelector('#name').value;
    const imageInput = document.querySelector('#image').value;
    const teamInput = document.querySelector('#team').value;
    const nationInput = document.querySelector('#nation').value;
    const dobInput = document.querySelector('#dob').value;
    const giroGcInput = document.querySelector('#giroGc').value;
    const tourGcInput = document.querySelector('#tourGc').value;
    const vueltaGcInput = document.querySelector('#vueltaGc').value;
    const giroStagesInput = document.querySelector('#giroStages').value;
    const tourStagesInput = document.querySelector('#tourStages').value;
    const vueltaStagesInput = document.querySelector('#vueltaStages').value;

    const invalidInputs = [];
    const dobRegex = /^(\d{4})-(\d{2})-(\d{2})$/;

    function isValidDate(dateString) {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day); // Month is zero-indexed in JS Date

        return date && date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;
    }

    if (nameInput.trim() === '') invalidInputs.push('name');
    if (imageInput.trim() === '') invalidInputs.push('image');
    if (teamInput.trim() === '') invalidInputs.push('team');
    if (nationInput.trim() === '') invalidInputs.push('nation');
    if (!dobRegex.test(dobInput) || !isValidDate(dobInput)) invalidInputs.push('dob');
    if (!Number.isInteger(Number(giroGcInput)) || Number(giroGcInput) < 0) invalidInputs.push('giroGc');
    if (!Number.isInteger(Number(tourGcInput)) || Number(tourGcInput) < 0) invalidInputs.push('tourGc');
    if (!Number.isInteger(Number(vueltaGcInput)) || Number(vueltaGcInput) < 0) invalidInputs.push('vueltaGc');
    if (!Number.isInteger(Number(giroStagesInput)) || Number(giroStagesInput) < 0) invalidInputs.push('giroStages');
    if (!Number.isInteger(Number(tourStagesInput)) || Number(tourStagesInput) < 0) invalidInputs.push('tourStages');
    if (!Number.isInteger(Number(vueltaStagesInput)) || Number(vueltaStagesInput) < 0) invalidInputs.push('vueltaStages');

    if (invalidInputs.length !== 0) {
        submit.preventDefault();
        document.querySelector('.validationError').classList.remove('hidden');
        inputs.forEach(input => {
            const label = document.querySelector(`label[for="${input}"]`);
            label.style.color = invalidInputs.includes(input) ? 'red' : 'black';
        });
    }
}
