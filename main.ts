input.onSound(DetectedSound.Loud, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
let etat = 0
music.setVolume(127)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    etat = randint(0, 3)
    if (30 < input.lightLevel() && 0 == etat) {
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(WaveShape.Triangle, 0, 4964, 156, 0, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
            basic.pause(200)
            music.play(music.createSoundExpression(WaveShape.Triangle, 4897, 4964, 156, 0, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        }
        basic.pause(4000)
    }
    if (1 == etat) {
        for (let index = 0; index < 4; index++) {
            music.play(music.createSoundExpression(WaveShape.Sine, 1, 1614, 138, 0, 1000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            images.createImage(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `).showImage(0)
            images.createImage(`
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                `).showImage(0)
            basic.pause(1000)
            music.play(music.createSoundExpression(WaveShape.Sine, 1699, 1, 138, 0, 1000, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        images.createImage(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `).showImage(0)
    }
})
