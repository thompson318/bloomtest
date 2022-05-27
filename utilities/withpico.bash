#! /bin/bash

i=0

while [ $i -lt 43 ]
do
	outname=$(printf %02d.wav $i)
	i=$((i + 1))
	pico2wave -l en-GB -w $outname "$(head -n $i ulysses_624_byline.txt | tail -n 1)"
done

