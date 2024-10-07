import axios from 'axios';

export class SpTransService {
    private token: string;
    private url: string;
    private headers: any;

    constructor(token: string, url: string) {
        this.token = token;
        this.url = url;
        this.headers = [];
    } 

    public async auth(): Promise<Object> {
        try {
            let auth = await axios({
                method: 'post',
                url: `${this.url}/Login/Autenticar?token=${this.token}`,
            }); 

            return {
                status: 200,
                message: "Autenticado com sucesso."
            };            
        } catch (error: Error) {
            return {
                status: error.response.status,
                message: error.response.data
            }
        }
    }

    public async getPositions(): Promise<Object> {
        try {
            let positions = await axios({
                method: 'get',
                url: `${this.url}/Posicao`,
                headers: { 
                    'Cookie': process.env.SPTRANS_COOKIE_REQUEST
                }
            });

            return {
                status: 200,
                data: positions.data
            }
        } catch (error: Error) {
            return {
                status: error.response.status,
                message: error.response.data
            }  
        }
    }

    public async getVeiclesOfLine(lineNumber: string): Promise<Object> {
        try {
            let veicles = await axios({
                method: 'get',
                url: `${this.url}/Posicao/Linha?codigoLinha=${lineNumber}`,
                headers: { 
                    'Cookie': process.env.SPTRANS_COOKIE_REQUEST
                }
            });

            return {
                status: 200,
                data: veicles.data
            }
        } catch (error: Error) {
            return {
                status: error.response.status,
                message: error.response.data
            }  
        }
    }

    public async getEstimateStop(lineNumber: string): Promise<Object> {
        try {
            let veicles = await axios({
                method: 'get',
                url: `${this.url}/Previsao/Linha?codigoLinha=${lineNumber}`,
                headers: { 
                    'Cookie': process.env.SPTRANS_COOKIE_REQUEST
                }
            });

            return {
                status: 200,
                data: veicles.data
            }
        } catch (error: Error) {
            return {
                status: error.response.status,
                message: error.response.data
            }  
        }
    }
}