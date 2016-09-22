import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
        { id: 1,  name: '暴风城的勇士'},
        { id: 11, name: 'Mr. 赖斯' },
        { id: 12, name: '漩涡鸣人' },
        { id: 13, name: '本巴斯多' },
        { id: 14, name: '女武神 赛勒瑞塔斯' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: '橡皮人-路飞' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr. 脑残' },
        { id: 19, name: 'Magma' },
        { id: 20, name: '龙卷风' }
    ];
    return {heroes};
  }
}