const createUserWithDeckAndList = async () => {
    const user1 = new models.User({
        username: 'bobs',
    });

    const deck1 = new models.Deck({
        name: 'Grixis Delver',
        owner: user1.id,
        format: 'Legacy',
        cardsList: [
            {
                name: 'Delver of Secrets',
                colors: ['U'],
                artwork: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=226749&type=card',
                cmc: '1',
                type: 'creature'
            },
            {
                name: 'Volcanic Island',
                colors: ['C'],
                artwork: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=585&type=card',
                cmc: '0',
                type: 'basic land'
            }
        ]
    });

    const list1 = new models.List({
        name: 'want',
        owner: user1.id,
        cardsList: [{ 
            name: 'Delver of Secrets',
            colors: ['U'],
            artwork: 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=226749&type=card',
            cmc: '1',
            type: 'creature',
            set: 'Innistrad'
        }]
    })

    await list1.save();

    await deck1.save();

    await user1.save();
};