import axios from 'axios';

const AddGuest = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const evidenceInput = document.querySelector('#validationCustomEvidence');
    evidenceInput.addEventListener('change', () => {
      this._updatePhotoPreview();
    });

    const addFormRecord = document.querySelector('#addRecordForm');
    addFormRecord.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormRecord.classList.add('was-validated');
        await this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      try {
        const data = new FormData();
        data.append('description', formData.description);
        data.append('photo', formData.photo);

        const response = await axios.post('https://story-api.dicoding.dev/v1/stories/guest', data);

        if (response.status >= 200 && response.status < 300) {
          const successAlert = document.createElement('div');
          successAlert.classList.add('alert', 'alert-success', 'mt-3', 'alert-dismissible', 'fade', 'show');
          successAlert.innerHTML = `
            <strong>Success!</strong> Data has been posted successfully.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          `;
          const form = document.querySelector('#addRecordForm');
          form.insertAdjacentElement('afterend', successAlert);
          // alert('Data has been posted successfully');
          console.log('Data has been posted for axios');
        } else {
          alert('Data has been not posted successfully');
          throw new Error('Network response was not ok');
        }

        // this._goToDashboardPage();
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  },

  _getFormData() {
    const descriptionInput = document.querySelector('#validationCustomNotes');
    const evidenceInput = document.querySelector('#validationCustomEvidence');

    const photo = evidenceInput.files[0];

    return {
      description: descriptionInput.value,
      photo: photo,
    };
  },


  _updatePhotoPreview() {
    const evidenceImgChange = document.querySelector('#validationCustomEvidenceImgChange');
    const evidenceImgInput = document.querySelector('#validationCustomEvidence');

    const photo = evidenceImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      evidenceImgChange.parentElement.classList.remove('d-none');
      evidenceImgChange.style.backgroundImage = `url('${event.target.result}')`;
    };

    reader.readAsDataURL(photo);
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default AddGuest;
