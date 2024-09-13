"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up(queryInterface) {
        return queryInterface.bulkInsert('prayers', [{
                prayer_whom: 'Pelo conselho da Igreja',
                prayer_reason: 'Reunião mensal do Conselho com assuntos importantes para igreja',
            },
            {
                prayer_whom: 'Pelos pastores da Igreja',
                prayer_reason: 'Lidam com o cuidado da vida espiritual dos irmãos',
            }
        ], {});
    },
    down(queryInterface) {
        return queryInterface.bulkDelete('prayers', {});
    }
};
