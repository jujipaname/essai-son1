def on_sound_loud():
    music.play(music.builtin_playable_sound_effect(soundExpression.happy),
        music.PlaybackMode.UNTIL_DONE)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

etat = 0

def on_forever():
    global etat
    if 30 < input.light_level() and 0 == etat:
        for index in range(4):
            music.play(music.create_sound_expression(WaveShape.TRIANGLE,
                    input.temperature(),
                    4964,
                    156,
                    0,
                    200,
                    SoundExpressionEffect.TREMOLO,
                    InterpolationCurve.LOGARITHMIC),
                music.PlaybackMode.UNTIL_DONE)
            basic.pause(200)
            music.play(music.create_sound_expression(WaveShape.TRIANGLE,
                    4897,
                    4964,
                    156,
                    0,
                    200,
                    SoundExpressionEffect.TREMOLO,
                    InterpolationCurve.LOGARITHMIC),
                music.PlaybackMode.UNTIL_DONE)
        basic.pause(4000)
    etat += randint(0, 3)
basic.forever(on_forever)
