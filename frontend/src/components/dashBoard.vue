<template>
    {{ caseDetails.data }}======== {{ caseStage }}
    <div class="main-div h-[120vh] w-full">
        <div class="header w-full h-[330px] px-20">
            <!-- <div class="title-bar w-full">
                <p class=" text-white">Dash Board</p>
            </div> --> <span class="text-white"></span>
            <div class="w-full row m-0">
                <div class="col-12 col-md-6 col-lg-8 mt-3">
                    <h1 class="text-[30px] text-white">Good Morning, <span class=" font-bold text-[35px]">{{ session.user }}</span></h1>
                    <p class=" text-white text-2xl font-light mt-3">Tax Cases summary</p>
                </div>
                <div class="mt-4 col-12 col-md-6 col-lg-4 flex justify-end w-full">
                    <Button class="addbtn text-primary mt-3 p-3 px-3" icon-left="plus">Add New</Button>
                </div>
            </div>
            <div class="open-case row g-2">
                <div class="col-12 col-md-12 col-lg-8 mt-4">
                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-3 border-r h-[115px] mt-3">
                            <div class="flex">
                                <div class="exclamation-border h-[100px] flex items-center justify-center w-[100px] p-4">
                                    <div class="exclamation w-[50px] h-[50px] bg-white p-3 flex justify-center items-center">
                                        <svg class="" xmlns="http://www.w3.org/2000/svg" height="24" width="6" viewBox="0 0 64 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#74C0FC" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                                    </div>
                                </div>
                                <div class="mx-3 mt-3 text-white">
                                    <span class=" text-[20px] font-light">Open Cases</span><br/>
                                    <span class=" font-bold text-[33px]">{{ caseCount }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-9 mt-3 mb-5">
                            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 ms-3">
                                <div class="col flex">
                                    <div class="border border-primary h-[40px] icon-border p-1 w-[40px] flex items-center justify-center">
                                    <svg class="" xmlns="http://www.w3.org/2000/svg" height="27" width="16" viewBox="0 0 384 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#FFFFFF" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                    </div>
                                    <div class="mx-3 text-white">
                                        <span class=" text-[15px] font-light">Show Cause Notice</span><br/>
                                        <span class=" font-bold text-[18px]">{{ showCount }}</span>
                                    </div>
                                </div>
                                <div class="col flex">
                                    <div class="icon-border p-1 h-[40px] w-[40px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="20" viewBox="0 0 512 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#f7f9fc" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/></svg>
                                    </div>
                                    <div class="mx-3 text-white">
                                        <span class=" text-[15px] font-light">Notice Reply</span><br/>
                                        <span class=" font-bold text-[18px]">{{ noticeCount }}</span>
                                    </div>
                                </div>
                                <div class="col flex">
                                    <div class="icon-border p-1 h-[40px] w-[40px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="17"  viewBox="0 0 576 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#e2e4e9" d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                                    </div>
                                    <div class="mx-3 text-white">
                                        <span class=" text-[15px] font-light">Demand</span><br/>
                                        <span class=" font-bold text-[18px]">{{ demandCount }}</span>
                                    </div>
                                </div>
                                <div class="col mt-3 flex">
                                    <div class="icon-border p-1 h-[40px] w-[40px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="17" viewBox="0 0 512 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#eceff3" d="M318.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-120 120c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l4-4L325.4 293.4l-4 4c-12.5 12.5-12.5 32.8 0 45.3l16 16c12.5 12.5 32.8 12.5 45.3 0l120-120c12.5-12.5 12.5-32.8 0-45.3l-16-16c-12.5-12.5-32.8-12.5-45.3 0l-4 4L330.6 74.6l4-4c12.5-12.5 12.5-32.8 0-45.3l-16-16zm-152 288c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l48 48c12.5 12.5 32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-1.4-1.4L272 285.3 226.7 240 168 298.7l-1.4-1.4z"/></svg>
                                    </div>
                                    <div class="mx-3 text-white">
                                        <span class=" text-[15px] font-light">Appeal</span><br/>
                                        <span class=" font-bold text-[18px]">{{ appealCount }}</span>
                                    </div>
                                </div>
                                <div class="col mt-3 flex">
                                    <div class="icon-border p-1 h-[40px] w-[40px] flex justify-center items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="17"  viewBox="0 0 384 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#f0f2f4" d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                    </div>
                                    <div class="mx-3 text-white">
                                        <span class=" text-[15px] font-light">Order</span><br/>
                                        <span class=" font-bold text-[18px]">{{ orderCount }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 upcoming-hearing">
                        <h2>Upcoming Hearings</h2>
                        <div class="w-[85%] case-details mt-4 border-white bg-white h-[400px]">
                            <div class="flex items-center p-2">
                                <div class="border mx-2 grid-icon mt-1 h-[32px] w-[32px] p-1 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="17" width="17" viewBox="0 0 448 512">!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path fill="#061B50" d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"/></svg>
                                </div>
                            <h5 class="mx-3 mt-3">September 2021</h5>  
                            </div>
                            <div class="mx-2 scrollbar ms-4 overflow-y-scroll h-[320px]">
                                <div class="row w-[99%] py-3 border-con" v-for="details of caseDetails.data" :key="details.name">
                                    <div class="col-3">
                                        {{ details.case_code }}
                                    </div>
                                    <div class="col-5">
                                        <!-- {{ details.date.toLocaleDateString('en-US', {weekday: 'long'}) }} -->
                                    </div>
                                    <div class="col-3">
                                        <div class="badge p-2 px-3">
                                            {{ details.case_stage }}
                                        </div>
                                    </div>
                                    <div class="col-1 flex justify-end">
                                        <router-link :to="`/caseDetails/${details.name}`"><Button variant="gost" icon="chevron-right"></Button></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="overdue-border h-[500px] w-full overdue p-3">
                        <h1 class="text-white">Overdue Hearings</h1>
                        <div class="mt-5 text-white">
                            <p>DT/2017-18/TN/121 <br/>
                            Thursday, 16 September 2021</p>
                            <Badge
                                :variant="'subtle'"
                                theme="green"
                                size="lg"
                                label="Badge">
                                Badge
                                </Badge>
                        </div>
                        <div class="mt-5 text-white">
                            <p>DT/2017-18/TN/121 <br/>
                            Thursday, 16 September 2021</p>
                            <Badge
                                :variant="'subtle'"
                                theme="green"
                                size="lg" 
                                label="Badge">
                                Badge
                                </Badge>
                        </div>
                        <div class="mt-5 text-white">
                            <p>DT/2017-18/TN/121 <br/>
                            Thursday, 16 September 2021</p>
                            <Badge
                                :variant="'subtle'"
                                theme="green"
                                size="lg"
                                label="Badge">
                                Badge
                                </Badge>
                        </div>
                    </div>
                    <div class="mt-4 w-full recent-activity border border-white h-[490px] bg-white p-3 py-4">
                        <h3 class="mb-4">Recent Case Activities</h3>
                        <div class="flex row scrollbar px-2 h-[405px] overflow-y-scroll">
                            <template v-for="stage of caseStage.data">
                                <div class="col-1">
                                    <div class="recent-act-icon p-1 w-[30px] h-[30px] mt-6"></div>                            
                                </div>
                                <div class=" col-11">
                                    <p class="mt-3">DT/2017-18/TN/121 <br>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, cumque ipsa cupiditate nulla. <br>
                                    <span class="text-body-secondary">Today . 11.36 AM</span> </p>
                                </div>
                            </template>
                            
                            <div class="col-1">
                                <div class="recent-act-icon p-1 w-[30px] h-[30px] mt-8"></div>                            
                            </div>
                            <div class=" col-11">
                                <p class="mt-7">DT/2017-18/TN/121 <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, cumque ipsa cupiditate nulla. <br>
                                <span class="text-body-secondary">Today . 11.36 AM</span> </p>
                            </div>
                            <div class="col-1">
                                <div class="recent-act-icon p-1 w-[30px] h-[30px] mt-8"></div>                            
                            </div>
                            <div class=" col-11">
                                <p class="mt-7">DT/2017-18/TN/121 <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, cumque ipsa cupiditate nulla. <br>
                                <span class="text-body-secondary">Today . 11.36 AM</span> </p>
                            </div>
                            <div class="col-1">
                                <div class="recent-act-icon p-1 w-[30px] h-[30px] mt-8"></div>                            
                            </div>
                            <div class=" col-11">
                                <p class="mt-7">DT/2017-18/TN/121 <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, cumque ipsa cupiditate nulla. <br>
                                <span class="text-body-secondary">Today . 11.36 AM</span> </p>
                            </div>
                            <div class="col-1">
                                <div class="recent-act-icon p-1 w-[30px] h-[30px] mt-8"></div>                            
                            </div>
                            <div class=" col-11">
                                <p class="mt-7">DT/2017-18/TN/121 <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, cumque ipsa cupiditate nulla. <br>
                                <span class="text-body-secondary">Today . 11.36 AM</span> </p>
                            </div>
                            <div class="col-1">
                                <div class="recent-act-icon p-1 w-[30px] h-[30px] mt-8"></div>                            
                            </div>
                            <div class=" col-11">
                                <p class="mt-7">DT/2017-18/TN/121 <br>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, cumque ipsa cupiditate nulla. <br>
                                <span class="text-body-secondary">Today . 11.36 AM</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script setup>
import 'frappe-ui'
import Button from 'frappe-ui/src/components/Button.vue';
import { Badge, createListResource, getCachedDocumentResource, getCachedListResource } from 'frappe-ui';
import { computed } from 'vue';
import {session} from '../data/session'
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';

const caseDetails = createListResource({
    doctype: 'Case Details',
    fields: ['name', 'case_code', 'case_category', 'case_stage', 'case_status', 'date', 'hearing_date'],
    // filters: {'case_status': 'Open'},
})
caseDetails.reload()

const caseStage = createListResource({
    doctype: 'Case Stage',
    fields: ['name', 'case_details', 'case_code', 'case_stage', 'date', 'short_description'],
})
caseStage.reload()

let caseCount = computed(() => {
    let count = 0;
    for(let caseDetail in caseDetails.data){
        count = count + 1;
    } 
    return count
});

const showCount = computed(() => {
    let showCount = 0;
    
    if(caseDetails.data){
        for(let i of caseDetails.data){
            let details = caseDetails.data
            if(i.case_stage == 'Show cause notice'){
                showCount = showCount + 1;
                console.log(showCount)
            }
        }
    }
    return showCount
})

const noticeCount = computed(() => {
    let noticeCount = 0;
    if(caseDetails.data){
        for(let i of caseDetails.data){
            if(i.case_stage == 'Notice reply'){
            noticeCount = noticeCount + 1;
            }
        }
    }
    return noticeCount
})

const demandCount = computed(() => {
    let demandCount = 0;
    if(caseDetails.data){
        for(let i of caseDetails.data){
            if(i.case_stage == 'Notice reply'){
                demandCount = demandCount + 1;
            }
        }
    }
    return demandCount
})

const appealCount = computed(() => {
    let appealCount = 0;
    if(caseDetails.data){
        for(let i of caseDetails.data){
            if(i.case_stage == 'Appeal'){
                appealCount = appealCount + 1;
            }
        }
    }
    return appealCount
})

const orderCount = computed(() => {
    let orderCount = 0;
    if(caseDetails.data){
        for(let i of caseDetails.data){
            if(i.case_stage == 'Order'){
                orderCount = orderCount + 1;
            }
        }
    }
    return orderCount
})

const upcomingHearings = () => {
    let cases = []
    if(caseDetails.data){
        for(let i of caseDetails.data){
            cases.push(i.name)
        }
    }
}

</script>
<style>
.main-div{
    background-color: rgb(250, 246, 246);
    min-height: 100vh;
    max-height: fit-content;
}
.main-div .header{
    background-color: rgb(6, 27, 80);
}
.header .title-bar{
    border-bottom: rgb(170, 170, 230) solid 1px;
}
.open-case .exclamation-border{
    border: 1px solid skyblue;
    border-radius: 30px;
    background-color: skyblue;
}
.open-case .exclamation{
    border: 1px solid skyblue;
    border-radius: 100%;
}
.icon-border{
    border-radius: 15px;
    background-color: blue;
}
.overdue{
    border-radius: 10px;
}
.upcoming-hearing .grid-icon{
    border-radius: 40%;
    background-color: rgb(248, 187, 131);
    
}
.overdue-border{
    border: 1px solid #133cba;
    background-color: #133cba;
}
.scrollbar::-webkit-scrollbar{
    width: 5px;
    background-color: white;
    
}
.scrollbar::-webkit-scrollbar-thumb{
    width: 5px;
    background-color: rgb(233, 230, 230);
    border-radius: 10px;
}
.case-details{
    border-radius: 10px;
}
.scrollbar Button{  
    color: rgb(124, 121, 121);
}
.badge{
    border: 1px solid rgba(144, 238, 144, 0.459);
    color: green;
    background-color: rgba(144, 238, 144, 0.459);
    font-size: 15px;
}
.border-con{
    border-bottom: 2px solid rgb(236, 233, 233);
}
.recent-activity{
    border-radius: 10px;

}
.recent-act-icon{
    border: 1px solid rgb(154, 154, 247);
    border-radius: 38%;
    background-color: rgb(154, 154, 247);
}
</style>
