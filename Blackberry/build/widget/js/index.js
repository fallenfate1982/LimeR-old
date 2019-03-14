/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function SetDeviceId() {
    var currId = window.localStorage.getItem("deviceId");

    if (currId == null) {
        currId = prompt("Enter full phone number eg 18683387036", "");
    }

    if (currId != null) {
        window.localStorage.setItem("deviceId", currId);
    }
    $("#lblDeviceId").text(currId);
}

function ChangeDeviceID() {
    var currId = window.localStorage.getItem("deviceId");

    currId = prompt("Enter full phone number eg 18683387036", currId);

    if (currId != null) {
        window.localStorage.setItem("deviceId", currId);
    }
    $("#lblDeviceId").text(currId);
}

function ChangeDistance() {
    var currDst = window.localStorage.getItem("Distance");

    currDst = prompt("Enter Proxmity in Km", currDst);

    if (currDst != null) {
        window.localStorage.setItem("Distance", currDst);
    }
}

function GetDeviceId() {
   
    var currId = window.localStorage.getItem("deviceId");
   
    return currId;
}

function getLastInfo() {
    var lastPos = window.localStorage.getItem("lastPos");
    var lastSucc = window.localStorage.getItem("lastPosSucc");
   
    $("#lblLasPos").text(lastPos);
    $("#lblLasSucc").text(lastSucc);
}

blackberry.system.event.onHardwareKey(blackberry.system.event.KEY_BACK, function () {
    //keep your code here
    //alert("back key pressed");
    //For example..
    //if you want to navigate to particular page(say previous.html) on back button,you can use
    //window.location.replace("previous.html");
    //you can also use
    //history.back(); // To navigate to previous page as per page navigation.     
    blackberry.app.requestBackground();
    return false;
});