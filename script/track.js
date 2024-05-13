class Track {
    // the racetrack should be randomly generated
    constructor() {
        this.length = 1000;
        this.width = 4;
        this.turns = 8;
    }

    generateTrack() {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        var amplitude = Math.floor(Math.random() * (100 - 20)) - 20
        var frequency = 0.02
        var phaseShift = Math.PI / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //line 1
        for (var i = 0; i < 1; i++) {
            // Calculate the phase for this wave
            var phase = phaseShift * i;

            // Begin a new path
            ctx.beginPath();

            // Loop through horizontal pixels and draw the wave
            for (var x = 0; x < canvas.width; x++) {
                var y = amplitude * Math.sin(frequency * x + phase);

                // Plot the point
                ctx.lineTo(x, canvas.height / 2 + y);
            }
            ctx.strokeStyle = "blue";
            ctx.stroke();
        }
        // line 2
        for (var i = 0; i < 1; i++) {
            // Calculate the phase for this wave
            var phase = phaseShift * i;

            // Begin a new path
            ctx.beginPath();

            // Loop through horizontal pixels and draw the wave
            for (var x = 0; x < canvas.width; x++) {
                var y = amplitude * Math.sin(frequency * x + phase);

                // Plot the point
                ctx.lineTo(x, canvas.height / 3 + y);
            }
            ctx.strokeStyle = "blue";
            ctx.stroke();
        }

    }
}

let track = new Track();
track.generateTrack();