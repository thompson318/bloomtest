#! /bin/bash

lastSound=$(ls sounds/[0-9][0-9]_*.mp3 | sort -g | tail -n 1)
lastSound=$(basename $lastSound)
numberOfSounds=${lastSound:0:2}

echo "const soundFiles = $((numberOfSounds + 1))"
echo "const allsounds = []"

sound=0

while [ $sound -le $numberOfSounds ]
do
	number=$(printf '%02d' $sound)
	theseSounds=$(ls sounds/${number}_*.mp3 | sed -e "s/^/'/" | sed -e "s/$/'/" | sed -e "s/ /, /")
	theseSounds=$(echo $theseSounds | sed -e "s/ /, /")
	echo "const sounds_${number} = [ $theseSounds ]"
	echo "allsounds.push(sounds_${number})"
	sound=$(($sound + 1))
done

