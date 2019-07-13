function solve(commands) {
    commands.pop();
    let library = commands.shift().split(' ');

    for(let i in commands) {
        let [action, game] = commands[i].split(' ');

        if (action === 'Install') {
            if (!library.includes(game)) {
                library.push(game);
            }
        } else if (action === 'Uninstall') {
            if (library.includes(game)) {
                let index = library.indexOf(game);
                library.splice(index, 1);
            }
        } else if (action === 'Update') {
            if (library.includes(game)) {
                let index = library.indexOf(game);
                let update = library.splice(index, 1);
                library.push(...update);
            }
        } else if (action === 'Expansion') {
            let [currentGame, expansion] = game.split('-');

            if (library.includes(currentGame)) {
                let index = library.indexOf(currentGame);
                library.splice(index + 1, 0, `${currentGame}:${expansion}`);
            }
        }
    }

    console.log(library.join(' '));
}
