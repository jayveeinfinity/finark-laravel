<template>
    <Head title="Events &sdot; " />
    <!-- # WELCOME SECTION -->
    <div class="pt-8 pb-0 bg-white">
        <div class="container-xxl container-xl container-lg container-md container-sm pt-5">
            <div class="text-center pt-8 pb-5 fa-2024-bg-aboutus" style="position: relative; height: 25rem;">
                <div class="position-absolute px-5 pb-4" style="bottom: 0;">
                    <h2 class="text-start text-uppercase" style="color: #F6F6FA;font-family: Lato;font-size: 3.5rem;font-style: normal;font-weight: 900;line-height: normal;">
                        Events
                    </h2>
                    <p style="color: #F6F6FA; font-family: Lato; font-size: 2rem; font-style: normal; font-weight: 400; line-height: normal;">
                        Come check out up and coming financial events from us truly.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid fa-2024-bg-events">
        <div class="container-xxl mt-7">
            <div class="row pt-7">
                <div class="col-lg-4 col-md-12 col-sm-12 mb-7" v-for="event, index in events" :key="event.id">
                    <div class="d-flex flex-column bg-white h-100">
                        <div>
                            <img class="w-100 object-fit-cover" :src="'storage/events/posters/' + event.poster" style="height: 350px;">
                        </div>
                        <div class="d-flex flex-column p-4 h-100" style="gap: 1rem;">
                            <span class="fa-2024-events-card-date">{{ event.date }}</span>
                            <h3 class="fa-2024-events-card-name mb-0">{{ event.name }}</h3>
                            <div class="d-flex justfity-content-start mb-3">
                                <span class="fa-2024-events-card-map-icon mt-1 me-1 mr-2">
                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                                </span>
                                <p class="mb-0">{{ event.location }}</p>
                            </div>
                            <div class="text-center" style="margin-top: auto;">
                                <button class="btn fa-2024-btn-wide" data-bs-toggle="modal" data-bs-target="#eventModal" @click="setActiveEvent(index)">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12 mb-7">
                    <div class="d-flex flex-column justify-content-center align-items-center h-100 py-9"  style="border: 1px solid #FFF; background: linear-gradient(180deg, #F6F6FA 0%, rgba(255, 255, 255, 0.53) 0.01%, rgba(255, 255, 255, 0.31) 99.99%, rgba(246, 246, 250, 0.00) 100%);">
                        <h4 class="fa-2024-events-card-new px-5">
                            More events coming soon
                        </h4>
                        <span>
                            <svg class="fa-2024-events-card-new-icon text-white" xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                                <path d="M49.875 28.5C49.875 28.9724 49.6873 29.4255 49.3533 29.7595C49.0192 30.0936 48.5662 30.2812 48.0938 30.2812H30.2812V48.0938C30.2812 48.5662 30.0936 49.0192 29.7595 49.3533C29.4255 49.6873 28.9724 49.875 28.5 49.875C28.0276 49.875 27.5745 49.6873 27.2405 49.3533C26.9064 49.0192 26.7188 48.5662 26.7188 48.0938V30.2812H8.90625C8.43383 30.2812 7.98077 30.0936 7.64672 29.7595C7.31267 29.4255 7.125 28.9724 7.125 28.5C7.125 28.0276 7.31267 27.5745 7.64672 27.2405C7.98077 26.9064 8.43383 26.7188 8.90625 26.7188H26.7188V8.90625C26.7188 8.43383 26.9064 7.98077 27.2405 7.64672C27.5745 7.31267 28.0276 7.125 28.5 7.125C28.9724 7.125 29.4255 7.31267 29.7595 7.64672C30.0936 7.98077 30.2812 8.43383 30.2812 8.90625V26.7188H48.0938C48.5662 26.7188 49.0192 26.9064 49.3533 27.2405C49.6873 27.5745 49.875 28.0276 49.875 28.5Z" fill="#F6F6FA"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- # QUOTE SECTION -->
    <div class="container-fluid fa-2024-bg-events-quote">
        <div class="py-7">
            <p class="fa-2024-landing-quote-p text-finark-alt">Your success is only one step away</p>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <img class="w-100 object-fit-cover rounded-top" :src="'storage/events/posters/' + selectedEvent.poster" style="height: 400px;">
                <div class="modal-body">
                    <div class="d-flex flex-column" style="gap: 1rem;">
                        <span class="fa-2024-events-card-date">{{ selectedEvent.date }}</span>
                        <h3 class="fa-2024-events-card-name mb-0">{{ selectedEvent.name }}</h3>
                        <div class="d-flex justfity-content-start mb-3">
                            <span class="fa-2024-events-card-map-icon mt-1 me-1 mr-2">
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            </span>
                            <p class="mb-0">{{ selectedEvent.location }}</p>
                        </div>
                    </div>
                    <div class="mt-3">
                        <h3 class="mb-1">About event</h3>
                        <div class="fst-italic" v-html="selectedEvent.description"></div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn fa-2024-btn-wide" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const props = defineProps({
        events: Object
    });

    const events = ref(props.events);
    const selectedEvent = ref(0);

    const setActiveEvent = (index) => {
        selectedEvent.value = events.value[index];
    };
</script>

<script>
    import Landing from './../../Shared/Layouts/Landing';

    export default {
        layout: Landing
    }
</script>