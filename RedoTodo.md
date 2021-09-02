
- [ ] 0. LoadingScreen
- [x] 1. Landing
- [x] 2. LandingOverlay
  - section: what
  - narration: An action-adventure game in which the player is put into emergency medical situations and applies first aid to help others
- [x] 3. BusOrTram
  - narration: A game that revolves around choice
  - story: You are taking the [bus / tram, setTransport] on your way to work
- [x] 4. Collapse
  - narration: where every second counts
  - story: You hear a loud thus behind you. Someone has collapsed onto the floor. What do you do?
  - [4A. TimerEnd / 4B. TooEarlyCompresisons / 4C. TooEarlyBreaths / 4D. TooEarlyCallHelp / 5. InitialVitals, setScene]
- [ ] 4A. TimerEnd
  - narration: and every scenario is one that can and does happen in reality
  - story: you start backing away from the situation and so does everyone around you. Surely, someone on the {transport} will do something... right?
  - [4Aa. Yea]
- [x] 4Aa. BystanderEffect
  - narration: but unlike reality, gives players freedom for trial, error and an opportunity to learn
  - story: The Bystander Effect. Thousands of lives are lost due to this phenomenon, including the person who collapsed in your {transport} ride.
  - [4. Rewind Time]
- [ ] 4B. TooEarlyCompressions
  - narration: 
  - story: How many chest compressions should you do?
  - [4Ba. 10 / 20 / 30 / 40]
- [ ] 4Ba. 
  - narration:
  - story: 
- [ ] 4B_. 
  - narration: 
  - story: You are about to do the first chest compression when, suddenly, the person jolts awake - "What are you doing?!" Maybe you should've checked if the person was conscious and/or breathing before jumping to conclusions...
  - [4. Rewind Time]
- [ ] 4Ca. TooEarlyBreaths
- [ ] 4Da. TooEarlyCallHelp
- [ ] 5. InitialVitals
  - narration: and every scenario is one that can happen in our own lives
  - story: You establish that the person is unconscious and not breathing. What do you do next?
  - [5Aa. InitialVitalsAgain / 5Ba. EarlyCompresisons / 5Ca. EarlyBreaths / 5Da. EarlyCallHelp / 6. CallHelp]
- [ ] 5Aa. InitialVitalsAgain
  - narration: a game that guides the player to make the right choices
  - story: The person is still unconscious and breathing, you've got to act fast.
  - [5Aa. InitialVitalsAgain / 5Ba. EarlyCompresisons / 5Ca. EarlyBreaths / 5Da. EarlyCallHelp / 6. CallHelp]
- [ ] 5Ab. InitialVitalsAgain (x2)
  - narration: a game that sometimes has to force the player to make the right choices
  - story: 
  - [5Ba. EarlyCompresisons / 5Ca. EarlyBreaths / 5Da. EarlyCallHelp / 6. CallHelp]
- [ ] 5B. EarlyCompressions
- [ ] 5C. EarlyBreaths
- [ ] 5D. EarlyCallHelp
- [ ] 6. CallHelp
  - narration: and it helps prepare us for 
  - story: You instruct another passenger to call
  - [6b. 000 / 6aa. Not 000]
- [ ] 6a. CallHelpWrong
  - narration: 
- [ ] 6b. 

- [ ] 7. PreCPR
  - narration: a game that makes us realise how much we really know
  - shards:
    - < 50% of most populations know CPR
    - CPR can increase survival by up to 3X
  - story: How many chest compressions and rescue breaths should you give?
    - 30 - 2
  - [ ] 7A. PreCPRA
    - narration: or rather, how much we don't really know
    - shards:
      - < 10% of people can are able to perform CPR at the correct rate
      - depth 5cm
      - songs
    - story: How fast should the chest compressions be?
      - answer: 100 - 120 BPM
## WHY
- [ ] 8. CPR
  - 30 chest compressions at 100-120 BPM
- [ ] 9. RescueBreaths
  - 2 rescue breaths - 80-100%
- [ ] 10. CheckVitals
  - not breathing and unresponsive

- while you're busy saving someone's life, let's go through why this game matters (if it hasn't already been glaringly obvious)

- hundreds of thousands of people die every year from circumstances that could have been saved with first aid
- yet, fewer than one in five of us knows even basic first aid
- < 50% of most populations know how to perform CPR
- about 10% of people know the correct pace for perfroming CPR compressions
- about 90% of people who have an out-of-hospital cardiac arrest die due to this fact
- CPR is just one of many life-saving skills that can save hundred of thousands of lives

- hopefully, now you'll be part of the 50% who are willing to do bystander-CPR
- but you probably won't because even people who have taken a first aid course forget the information or go blank when an actual medical emergency arises
- this is due to lack of practice and recall
- a problem that could be very easily solved by
- if only we knew how to make people recall and remember vast amounts of information and react almost instinctually in stressful situations, right? (images of pokedex and fps pro gamers)
- funny, how it's a necessity for us to 'find the area under graphs', be able to recite the process of photosynthesis and remember the birthdates of historical figures yet, when faced with situations that require just basic first aid, most of us will freeze and have no idea what to do (or even worse, act on the premise of false information).



- [ ] 11. AmbulanceArrives
## HOW
- [ ] 12. Summary
  - narration
    - so you get the gist of it now - this is a game
      - about choice
      - based on real-life events
    - and it matters because
  - story
    - now you must be wondering how to one can move forward with this amazing concept and make it come to life
    - [12. Yes / 12. Heck Yes!]
- [ ] 13. HowOne
- [ ] 14. HowTwo
- [ ] 15. End
  - finally, if you'd like to learn more about first aid or about games that inspired this one, check out the references
  - [15. Check out the references / 15. No thanks]
- [ ] 16. References
  - yea, well, I spent a lot of time on this so here they are anyways
  - References
  - Footer




- in the actual game, you would be able to choose different actions and carry them out, bringing you on separate storylines with different outcomes. But I didn't have to time to come up with storylines, (I have other subjects too, David), so here is a punishment message that wastes your time everytime you get something wrong.

- "Please let David mark this."

- Short list of additional notes:
  - I am a horrible coder so the fonts might not be completely consistent throughout the pitch and some animations feel choppy but this was the best that I could do with the skillset I have
  - the 'pitch dialogue' gets more informal as the pitch progresses akin to how I became more sleep deprived as I was writing it