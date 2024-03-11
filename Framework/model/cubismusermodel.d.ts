/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
import { Live2DCubismFramework as cubismmotionmanager } from '../../src/motion/cubismmotionmanager';
import { Live2DCubismFramework as cubismtargetpoint } from '../../src/math/cubismtargetpoint';
import { Live2DCubismFramework as cubismmodelmatrix } from '../../src/math/cubismmodelmatrix';
import { Live2DCubismFramework as cubismmoc } from '../../src/model/cubismmoc';
import { Live2DCubismFramework as cubismmodel } from '../../src/model/cubismmodel';
import { Live2DCubismFramework as acubismmotion } from '../../src/motion/acubismmotion';
import { Live2DCubismFramework as cubismmotion } from '../../src/motion/cubismmotion';
import { Live2DCubismFramework as cubismpose } from '../../src/effect/cubismpose';
import { Live2DCubismFramework as cubismmodeluserdata } from '../../src/model/cubismmodeluserdata';
import { Live2DCubismFramework as cubismphysics } from '../../src/physics/cubismphysics';
import { Live2DCubismFramework as cubismid } from '../../src/id/cubismid';
import { Live2DCubismFramework as csmstring } from '../../src/type/csmstring';
import { Live2DCubismFramework as cubismmotionqueuemanager } from '../../src/motion/cubismmotionqueuemanager';
import { Live2DCubismFramework as cubismbreath } from '../../src/effect/cubismbreath';
import { Live2DCubismFramework as cubismeyeblink } from '../../src/effect/cubismeyeblink';
import { Live2DCubismFramework as cubismrenderer_webgl } from '../../src/rendering/cubismrenderer_webgl';
import CubismRenderer_WebGL = cubismrenderer_webgl.CubismRenderer_WebGL;
import CubismEyeBlink = cubismeyeblink.CubismEyeBlink;
import CubismBreath = cubismbreath.CubismBreath;
import CubismMotionQueueManager = cubismmotionqueuemanager.CubismMotionQueueManager;
import csmString = csmstring.csmString;
import CubismIdHandle = cubismid.CubismIdHandle;
import CubismPhysics = cubismphysics.CubismPhysics;
import CubismModelUserData = cubismmodeluserdata.CubismModelUserData;
import CubismPose = cubismpose.CubismPose;
import ACubismMotion = acubismmotion.ACubismMotion;
import CubismModel = cubismmodel.CubismModel;
import CubismMoc = cubismmoc.CubismMoc;
import CubismModelMatrix = cubismmodelmatrix.CubismModelMatrix;
import CubismTargetPoint = cubismtargetpoint.CubismTargetPoint;
import CubismMotionManager = cubismmotionmanager.CubismMotionManager;
export declare namespace Live2DCubismFramework {
    /**
     * ユーザーが実際に使用するモデル
     *
     * ユーザーが実際に使用するモデルの基底クラス。これを継承してユーザーが実装する。
     */
    class CubismUserModel {
        /**
         * 初期化状態の取得
         *
         * 初期化されている状態か？
         *
         * @return true     初期化されている
         * @return false    初期化されていない
         */
        isInitialized(): boolean;
        /**
         * 初期化状態の設定
         *
         * 初期化状態を設定する。
         *
         * @param v 初期化状態
         */
        setInitialized(v: boolean): void;
        /**
         * 更新状態の取得
         *
         * 更新されている状態か？
         *
         * @return true     更新されている
         * @return false    更新されていない
         */
        isUpdating(): boolean;
        /**
         * 更新状態の設定
         *
         * 更新状態を設定する
         *
         * @param v 更新状態
         */
        setUpdating(v: boolean): void;
        /**
         * マウスドラッグ情報の設定
         * @param ドラッグしているカーソルのX位置
         * @param ドラッグしているカーソルのY位置
         */
        setDragging(x: number, y: number): void;
        /**
         * 加速度の情報を設定する
         * @param x X軸方向の加速度
         * @param y Y軸方向の加速度
         * @param z Z軸方向の加速度
         */
        setAcceleration(x: number, y: number, z: number): void;
        /**
         * モデル行列を取得する
         * @return モデル行列
         */
        getModelMatrix(): CubismModelMatrix;
        /**
         * 不透明度の設定
         * @param a 不透明度
         */
        setOpacity(a: number): void;
        /**
         * 不透明度の取得
         * @return 不透明度
         */
        getOpacity(): number;
        /**
         * モデルデータを読み込む
         *
         * @param buffer    moc3ファイルが読み込まれているバッファ
         */
        loadModel(buffer: ArrayBuffer): void;
        /**
         * モーションデータを読み込む
         * @param buffer motion3.jsonファイルが読み込まれているバッファ
         * @param size バッファのサイズ
         * @param name モーションの名前
         * @param onFinishedMotionHandler モーション再生終了時に呼び出されるコールバック関数
         * @return モーションクラス
         */
        loadMotion: (buffer: ArrayBuffer, size: number, name: string, onFinishedMotionHandler?: acubismmotion.FinishedMotionCallback) => cubismmotion.CubismMotion;
        /**
         * 表情データの読み込み
         * @param buffer expファイルが読み込まれているバッファ
         * @param size バッファのサイズ
         * @param name 表情の名前
         */
        loadExpression(buffer: ArrayBuffer, size: number, name: string): ACubismMotion;
        /**
         * ポーズデータの読み込み
         * @param buffer pose3.jsonが読み込まれているバッファ
         * @param size バッファのサイズ
         */
        loadPose(buffer: ArrayBuffer, size: number): void;
        /**
         * モデルに付属するユーザーデータを読み込む
         * @param buffer userdata3.jsonが読み込まれているバッファ
         * @param size バッファのサイズ
         */
        loadUserData(buffer: ArrayBuffer, size: number): void;
        /**
         * 物理演算データの読み込み
         * @param buffer  physics3.jsonが読み込まれているバッファ
         * @param size    バッファのサイズ
         */
        loadPhysics(buffer: ArrayBuffer, size: number): void;
        /**
         * 当たり判定の取得
         * @param drawableId 検証したいDrawableのID
         * @param pointX X位置
         * @param pointY Y位置
         * @return true ヒットしている
         * @return false ヒットしていない
         */
        isHit(drawableId: CubismIdHandle, pointX: number, pointY: number): boolean;
        /**
         * モデルの取得
         * @return モデル
         */
        getModel(): CubismModel;
        /**
         * レンダラの取得
         * @return レンダラ
         */
        getRenderer(): CubismRenderer_WebGL;
        /**
         * レンダラを作成して初期化を実行する
         */
        createRenderer(): void;
        /**
         * レンダラの解放
         */
        deleteRenderer(): void;
        /**
         * イベント発火時の標準処理
         *
         * Eventが再生処理時にあった場合の処理をする。
         * 継承で上書きすることを想定している。
         * 上書きしない場合はログ出力をする。
         *
         * @param eventValue 発火したイベントの文字列データ
         */
        motionEventFired(eventValue: csmString): void;
        /**
         * イベント用のコールバック
         *
         * CubismMotionQueueManagerにイベント用に登録するためのCallback。
         * CubismUserModelの継承先のEventFiredを呼ぶ。
         *
         * @param caller 発火したイベントを管理していたモーションマネージャー、比較用
         * @param eventValue 発火したイベントの文字列データ
         * @param customData CubismUserModelを継承したインスタンスを想定
         */
        static cubismDefaultMotionEventCallback(caller: CubismMotionQueueManager, eventValue: csmString, customData: CubismUserModel): void;
        /**
         * コンストラクタ
         */
        constructor();
        /**
         * デストラクタに相当する処理
         */
        release(): void;
        protected _moc: CubismMoc;
        protected _model: CubismModel;
        protected _motionManager: CubismMotionManager;
        protected _expressionManager: CubismMotionManager;
        protected _eyeBlink: CubismEyeBlink;
        protected _breath: CubismBreath;
        protected _modelMatrix: CubismModelMatrix;
        protected _pose: CubismPose;
        protected _dragManager: CubismTargetPoint;
        protected _physics: CubismPhysics;
        protected _modelUserData: CubismModelUserData;
        protected _initialized: boolean;
        protected _updating: boolean;
        protected _opacity: number;
        protected _lipsync: boolean;
        protected _lastLipSyncValue: number;
        protected _dragX: number;
        protected _dragY: number;
        protected _accelerationX: number;
        protected _accelerationY: number;
        protected _accelerationZ: number;
        protected _debugMode: boolean;
        private _renderer;
    }
}
//# sourceMappingURL=cubismusermodel.d.ts.map