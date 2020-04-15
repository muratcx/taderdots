export default function QuoteF() {
  let quotes=[
    `“Bad biscuits make the baker broke, bro.” – J`,
    `“You’re letting your brain dial turn your fear volume up.” – F`,
    `“Sometimes life is scary and dark. That is why we must find the light.” – BMO`,
    `“Everything small is just a smaller version of something big.” – F`,
    `“Suckin’ at something is the first step to being sorta good at something.” – J`,
    `“You’re getting hung up on imaginary problems. You got to focus on what’s real.” – J`,
    `“Y’all are just hating on my steez. I’m not listening to haters.” – I.K.`,
    `“Responsibility demands sacrifice.” – PB`,
    `"See this cup? This is literally my favourite cup. * Throws it out the window * now it's not real, so I don't care about it anymore." - J`,
    `"People get built different. We don't need to figure it out, just respect it." - PB`,
    `Nature is a balance. There's always a price. For every give there's a take and for every success a sacrifice - H. Abadeer`,
    `"Festering is always bad, man. There's no good kind of festering." - J`,
    `“To live life, you need problems. If you get everything you want the minute you want it, then what’s the point of livin’?” – J`,
    `"Too much artsy, not enough fartsy. We talked about this, clown!" - Ringmaster`,
    `"Come on, bro, taking pain is easy. You just have to imagine that every bruise is a hickey from the universe. And everyone wants to get with the universe. - F"`,
    `"You're just trying to make me feel sad so you can steal my tears when I cry, but I've got a heart of stone, buddy. I'm evil!" - F. Cyclops`,
    `What, you egg? - M`
  ];
  let rN=Math.floor(Math.random()*(quotes.length));
  return quotes[rN];
}

